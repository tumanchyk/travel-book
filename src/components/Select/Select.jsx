import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { changeType } from '../../store/places/placesSlice';

const SelectEl = () => {
  const typeList = useSelector(state => state.places.type);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    dispatch(changeType(event.target.value))
  };

  return <FormControl sx={{
          minWidth: 200,
          '& .MuiInputBase-root': {
            borderRadius: 0
        } 
        }}>
        <Select
      value={typeList}
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