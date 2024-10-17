import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from "../FormComponents/FormButton";
import FileField from "../FormComponents/FileField";
import Textarea from "../FormComponents/Textarea";
import { Form } from "./AddItemForm.styled";
import { createPlace, getAllPlaces } from "../../store/places/placesOperations";

const AddItemForm = () => {
  const [loading, setLoading] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const dispatch = useDispatch();
  const [fileError, setFileError] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFile(file)
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
     onSubmit: (values) => {
       if (!file) {
            setFileError("File is required");
            return;
        }
      try {
        setLoading(true);
        const formData = new FormData();
        if (file) {
        formData.append('image', file);
      }

      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });

      formData.append('isVisited', isVisited);

        dispatch(createPlace(formData));
        dispatch(getAllPlaces());
        setLoading(false);

        formik.resetForm();
        setFile('');
        isVisited(false);

      } catch (err) {
        setLoading(false);
      }
    },
   });
    
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CustomInput
            label="Country *"
            id="country"
            value={formik.values.country}
            handleChange={formik.handleChange}
            error={formik.errors.country}
            type="text"
            required={true}
        />
        <CustomInput
            label="Places *"
            id="places"
            value={formik.values.places}
            handleChange={formik.handleChange}
            error={formik.errors.places}
            type="text"
            required={true}
        />
        <CustomInput
            id="date"
            value={formik.values.date}
            handleChange={formik.handleChange}
            error={formik.errors.date}
            type="date"
      />  
      
        <Textarea
            label="Overview"
            id="overview"
            value={formik.values.overview}
            handleChange={formik.handleChange}
            error={formik.errors.overview}
            type="text"
        />
        <FileField handleChange={handleFileChange} value={file} error={fileError} />
        <FormControlLabel onChange={() => setIsVisited(!isVisited)} checked={isVisited}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-checked.MuiCheckbox-colorPrimary': { color: "#202020" } }} />} label="Visited" />
        
        <FormBtn name="Add new location" type="submit" disabled={loading} />
    </Form>
}
export default AddItemForm;