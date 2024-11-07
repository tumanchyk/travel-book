import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectElProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const SelectEl:React.FC<SelectElProps> = ({type = 'all', setType}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setType(event.target.value)
  };

  return <FormControl sx={{
          minWidth: 200,
          '& .MuiInputBase-root': {
            borderRadius: 0
        } 
        }}>
        <Select
          value={type}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderWidth: 1,
                borderColor: '#202020 ',
            },
          }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"visited"}>Visited</MenuItem>
          <MenuItem value={"not visited"}>Not visited</MenuItem>
        </Select>
      </FormControl>
}
export default SelectEl;