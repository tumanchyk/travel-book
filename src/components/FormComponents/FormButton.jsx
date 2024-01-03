import Button from '@mui/material/Button';

const FormBtn = ({name, type}) => {
    return <Button
  variant="contained"
  color="primary"
  sx={{
    backgroundColor: 'transparent',
    color: '#202020',
    border: '2px solid #202020',
    borderRadius: 0,
    minWidth: "300px",
    marginTop: 2,
    '&:hover': {
        backgroundColor: '#202020',
        color: '#FFF'
    },
      }}
      type={type}
>
  {name}
</Button>
}
export default FormBtn;