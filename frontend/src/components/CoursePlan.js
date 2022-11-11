import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from "react";
import { Reorder } from "framer-motion"

function CoursePlan(props) {
  const handleDone = () => {
    props.setResultCourses((props.selectedCourses).join(', '))
  }

  const handleRemove = (course) => {
    const index = props.selectedCourses.indexOf(course);
    if (index > -1) {
      (props.selectedCourses).splice(index, 1);
      props.setSelectedCourses(list => [...list])
      console.log(props.selectedCourses)
    }
  }

  useEffect(() => { }, [props.selectedCourses])

  return (
    <div>
      <Button variant="contained" size='small' style={{ backgroundColor: '#00bcd4' }} disableElevation onClick={handleDone}>DONE</Button>
      <Reorder.Group axis="y" values={props.selectedCourses} onReorder={props.setSelectedCourses} style={{listStyle:'none'}}>
        {(props.selectedCourses).map((course, index) => (
          <Reorder.Item key={course} value={course}>
            <ListItem
              disableGutters
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => { handleRemove(course) }}>
                  <DeleteIcon />
                </IconButton>}>
              <ListItemAvatar>
                <DehazeIcon />
              </ListItemAvatar>
              <Avatar sx={{ width: '8%', height: '50%', mr: 2 }} variant="rounded" sizes="">
                {index + 1}
              </Avatar>
              <ListItemText
                primary={course} />
            </ListItem>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default CoursePlan;