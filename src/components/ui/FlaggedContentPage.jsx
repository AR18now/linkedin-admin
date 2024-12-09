import React from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  Chip 
} from '@mui/material';

const FlaggedContentPage = () => {
  // Example flagged content data
  const flaggedContent = [
    {
      id: 1,
      contentTitle: 'Offensive Post',
      flaggedBy: 'User123',
      reason: 'Hate speech',
      status: 'Pending',
      flaggedDate: '2024-12-05',
    },
    {
      id: 2,
      contentTitle: 'Inappropriate Image',
      flaggedBy: 'User456',
      reason: 'Explicit content',
      status: 'Reviewed',
      flaggedDate: '2024-12-04',
    },
    {
      id: 3,
      contentTitle: 'Spam Message',
      flaggedBy: 'User789',
      reason: 'Spam',
      status: 'Pending',
      flaggedDate: '2024-12-03',
    },
    {
      id: 4,
      contentTitle: 'Fake Profile',
      flaggedBy: 'User101',
      reason: 'Impersonation',
      status: 'Resolved',
      flaggedDate: '2024-12-02',
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Flagged Content
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Table for Flagged Content */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content Title</TableCell>
              <TableCell>Flagged By</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Flagged</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flaggedContent.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.contentTitle}</TableCell>
                <TableCell>{row.flaggedBy}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={
                      row.status === 'Pending'
                        ? 'warning'
                        : row.status === 'Resolved'
                        ? 'success'
                        : 'default'
                    }
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{row.flaggedDate}</TableCell>
                <TableCell align="center">
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => alert(`Reviewing content: ${row.contentTitle}`)}
                  >
                    Review
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="success"
                    onClick={() => alert(`Resolved content: ${row.contentTitle}`)}
                  >
                    Resolve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FlaggedContentPage;
