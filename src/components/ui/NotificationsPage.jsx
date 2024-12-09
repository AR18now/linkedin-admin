import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import { Check, Trash2 } from 'lucide-react';

const NotificationsPage = ({ setActiveTab }) => {
  const notifications = [
    {
      id: 1,
      title: 'New User Registration',
      message: 'User JohnDoe has registered.',
      date: '2024-12-06',
      type: 'info',
      actionTab: 'users',
    },
    {
      id: 2,
      title: 'Flagged Content',
      message: 'Post "Spam Ad" flagged for review.',
      date: '2024-12-05',
      type: 'warning',
      actionTab: 'flagged',
    },
    {
      id: 3,
      title: 'Business Verification',
      message: 'Business "XYZ Corp" requires verification.',
      date: '2024-12-04',
      type: 'info',
      actionTab: 'verification',
    },
    {
      id: 4,
      title: 'Resolved Issue',
      message: 'Issue #345 has been resolved.',
      date: '2024-12-03',
      type: 'success',
      actionTab: 'analytics',
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <List>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              mb: 2,
              padding: 2,
              backgroundColor: notification.type === 'warning' ? '#fff7e0' : '#ffffff',
              cursor: 'pointer',
            }}
            onClick={() => setActiveTab(notification.actionTab)} // Navigate to the relevant tab
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: notification.type === 'warning' ? '#ff9800' : '#2196f3', color: '#fff' }}>
                {notification.type === 'info' && <i>i</i>}
                {notification.type === 'warning' && <i>!</i>}
                {notification.type === 'success' && <Check />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{notification.title}</Typography>}
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">
                    {notification.message}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {notification.date}
                  </Typography>
                </>
              }
            />
            <Box>
              <IconButton color="primary" sx={{ mr: 1 }}>
                <Check />
              </IconButton>
              <IconButton color="error">
                <Trash2 />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotificationsPage;
