import React, { useState, useEffect } from "react";
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
import Textarea from "../FormComponents/Textarea";
import { Form } from "../AddItemForm/AddItemForm.styled";
import FileField from "../FormComponents/FileField";
import { updatePlaces } from "../../services/placesOperations";
import { Location } from "../../types/location";

interface EditFormProps {
  place: Location | null;
}

const EditForm: React.FC<EditFormProps> = ({place}) => {
    const [isVisited, setIsVisited] = useState(false);
    const [file, setFile] = useState<File | string | null>(null);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutateAsync, isPending } = useMutation({
        mutationKey: ['update place'],
        mutationFn: (data: { formData: FormData; _id: string }) => updatePlaces(data)
    })

    useEffect(() => {
        if (place) {
            formik.setValues({
                country: place.country || "",
                places: place.places || "",
                date: place.date || "",
                overview: place.overview || "",
                _id: place._id || ""
            });
            setIsVisited(place.isVisited ?? false);
            setFile(place.image);
        }
    }, [place])
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile)
    };

    const formik = useFormik({
        initialValues: {
            country: "",
            places: "",
            date: "",
            overview: "",
            _id: ""
        },
        validationSchema: Yup.object().shape({
            country: Yup.string().max(100).required("Country is required"),
            places: Yup.string().max(200).required("Places is required"),
            date: Yup.string(),
            overview: Yup.string().max(500),
        }),
        onSubmit: async(values) => {
        try {
            const formData = new FormData();
            if (file) {
                formData.append('image', file);
            }

            Object.keys(values).forEach(key => {
                formData.append(key, values[key as keyof typeof values]);
            });

            formData.append('isVisited', isVisited.toString());
            await mutateAsync({ formData, _id: values._id });
            await queryClient.invalidateQueries({ queryKey: ["placesList"] });
            navigate('/');
        } catch (err) {
            console.log(err)
        }
        },
    });
     
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CustomInput
            label="Country"
            id="country"
            value={formik.values.country}
            handleChange={formik.handleChange}
            error={formik.touched.country && formik.errors.country}
            onBlur={formik.handleBlur}
            type="text"
            required={true}
        />
        <CustomInput
            label="Places"
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
            required={false}
        />  
        <Textarea
            label="Overview"
            id="overview"
            value={formik.values.overview}
            handleChange={formik.handleChange}
            required={false}
        />
        <FileField handleChange={handleFileChange} value={file || ''} />
        <FormControlLabel onChange={() => setIsVisited(!isVisited)} checked={isVisited}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-checked.MuiCheckbox-colorPrimary': { color: "#202020" } }} />} label="Visited" />
        
        <FormBtn name={isPending ? 'Loading...' : 'Save changes'} type="submit" disabled={!(formik.isValid && formik.dirty)}/>
    </Form>
}
export default EditForm;