import TextField from '@mui/material/TextField';

const Textarea = ({ label, id, value, handleChange }) => {
    return <TextField
            label={label}
            id={id}
            value={value}
            onChange={handleChange}
            multiline
            maxRows={4}
            variant="standard"
            fullWidth
            sx={{
            '& .MuiInputLabel-root': {
            pl: 2,
            },
            '& .MuiInputLabel-root.Mui-focused': {
            color: '#202020',
            },
            '& .MuiInputLabel-root.MuiFormLabel-filled': {
            color: '#202020',
            },
            '& .MuiInputBase-root.MuiInput-root::after': {
                borderBottomColor: '#202020'
            },
        }}
        />
}
export default Textarea;