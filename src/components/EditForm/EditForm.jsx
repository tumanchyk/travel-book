import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from "../FormComponents/FormButton";
import Textarea from "../FormComponents/Textarea";
import { Form } from "../AddItemForm/AddItemForm.styled";
import { updatePlaces } from "../../store/places/placesOperations";
import FileField from "../FormComponents/FileField";

const EditForm = () => {
    const place = useSelector(state => state.places.selectedPlace)
    const [loading, setLoading] = useState(false);
    const [isVisited, setIsVisited] = useState(false);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleFileChange = e => {
        const file = e.target.files[0];
        setFile(file)
    };
    useEffect(() => {
         if (place) {
            formik.setValues({
                country: place.country || "",
                places: place.places || "",
                date: place.date || "",
                overview: place.overview || "",
                _id: place._id
            });
             setIsVisited(place.isVisited);
             setFile(place.image);
        }
    }, [place])

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
        onSubmit: (values) => {
            try {
                setLoading(true);
                const formData = new FormData();
        if (file) {
        formData.append('image', file);
      }

      Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
      });
                console.log(formData)

      formData.append('isVisited', isVisited);
                dispatch(updatePlaces({ formData, id: values._id }));
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
        }
        },
    });
     
    return <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CustomInput
            label="Country"
            id="country"
            value={formik.values.country}
            handleChange={formik.handleChange}
            error={formik.errors.country}
            type="text"
            required={true}
        />
        <CustomInput
            label="Places"
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
        <FileField handleChange={handleFileChange} value={file} />
        <FormControlLabel onChange={() => setIsVisited(!isVisited)} checked={isVisited}
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-checked.MuiCheckbox-colorPrimary': { color: "#202020" } }} />} label="Visited" />
        
        <FormBtn name="Save changes" type="submit" disabled={loading} />
    </Form>
}
export default EditForm;