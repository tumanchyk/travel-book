import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  useQueryClient,
  useMutation
} from '@tanstack/react-query';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from "../FormComponents/FormButton";
import FileField from "../FormComponents/FileField";
import Textarea from "../FormComponents/Textarea";
import { Form } from "./AddItemForm.styled";
import { createPlace } from "../../services/placesOperations";

const AddItemForm = () => {
  const [isVisited, setIsVisited] = useState<boolean>(false);
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState<File | string | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ['add place'],
    mutationFn: async (data: FormData) => createPlace(data)
  })


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file || null)
    if (file) {
          setFileError(""); 
      }
  };

   const formik = useFormik({
    initialValues: {
        country: "",
        places: "",
        date: "",
        overview: "",
    },
    validationSchema: Yup.object().shape({
      country: Yup.string().max(100).required("Country is required"),
      places: Yup.string().max(200).required("Places is required"),
      date: Yup.string(),
      overview: Yup.string().max(500),
    }),
     onSubmit: async(values) => {
       if (!file) {
            setFileError("File is required");
            return;
        }
        const formData = new FormData();
        if (file) {
        formData.append('image', file);
      }

      Object.keys(values).forEach(key => {
        formData.append(key, values[key as keyof typeof values]);
      });

        formData.append('isVisited', isVisited.toString());
      try {
        await mutateAsync(formData);
        await queryClient.invalidateQueries({ queryKey: ["placesList"] });
        navigate('/list');
      } catch (err) {
        console.log(err)
      }
    },
   });
    
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CustomInput
            label="Country *"
            id="country"
            value={formik.values.country}
            handleChange={formik.handleChange}
            error={formik.touched.country && formik.errors.country}
            onBlur={formik.handleBlur}
            type="text"
            required={true}
        />
        <CustomInput
            label="Places *"
            id="places"
            value={formik.values.places}
            handleChange={formik.handleChange}
            error={formik.touched.places && formik.errors.places}
            onBlur={formik.handleBlur}
            type="text"
            required={true}
        />
        <CustomInput
            id="date"
            value={formik.values.date}
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.date && formik.errors.date}
            type="date"
      />  
      
        <Textarea
            label="Overview"
            id="overview"
            value={formik.values.overview}
            handleChange={formik.handleChange}
        />
        <FileField handleChange={handleFileChange} value={file || ''} error={fileError} />
        <FormControlLabel onChange={() => setIsVisited(!isVisited)} checked={isVisited}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-checked.MuiCheckbox-colorPrimary': { color: "#202020" } }} />} label="Visited" />
        
        <FormBtn name={isPending ? 'Loading...' : 'Add new location'} type="submit" disabled={!(formik.isValid && formik.dirty)}/>
    </Form>
}
export default AddItemForm;