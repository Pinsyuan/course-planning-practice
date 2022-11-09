import styled from "styled-components";
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function CourseInfo(props) {
  const handleAdd = (course) => {
    if (!props.selectedCourses.includes(course)){
      props.setSelectedCourses(list => [...list, course]);
    }
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }} dense={true}>
      {Object.values(props.coursesList).map((course) => (
        <ListItemButton onClick={() => {handleAdd(course['Course title'])}}>
          <ListItem
          key={course}
          disableGutters disablePadding
          secondaryAction={<p>{course.Credits} credits</p>}>
            <ListItemText
              primary={`${course['Course title']}`}
              secondary={
                <listText>{course['Instructor']}<br />{course['Curriculum Number']}</listText>
              } />
          </ListItem>
        </ListItemButton>
      ))}
    </List>
  );
}

export default CourseInfo;

const listText = styled.p`
  size: 2;
`