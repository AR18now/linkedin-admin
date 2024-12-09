import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Grid,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import { ThumbUp, Comment, Share } from '@mui/icons-material';

const posts = [
  {
    id: 1,
    author: 'Investor John',
    avatar: 'https://via.placeholder.com/150',
    title: 'Investment Opportunities in Renewable Energy',
    description:
      'Exploring profitable ventures in renewable energy and how businesses can leverage this growing market.',
    date: 'December 5, 2024',
    category: 'Investments',
    likes: 34,
    comments: 12,
    shares: 5,
  },
  {
    id: 2,
    author: 'Business Alpha Co.',
    avatar: 'https://via.placeholder.com/150',
    title: 'Scaling Startups: A Success Story',
    description:
      'Sharing insights on how we scaled our business from a small startup to a leading company in the tech industry.',
    date: 'December 6, 2024',
    category: 'Business Insights',
    likes: 48,
    comments: 20,
    shares: 10,
  },
  {
    id: 3,
    author: 'Investor Sarah',
    avatar: 'https://via.placeholder.com/150',
    title: 'Top Sectors to Watch in 2025',
    description:
      'A deep dive into the most promising sectors for investment in the coming year.',
    date: 'December 7, 2024',
    category: 'Market Trends',
    likes: 25,
    comments: 8,
    shares: 2,
  },
];

const InvestorBusinessPosts = () => {
  const [postStats, setPostStats] = useState(posts);

  const handleLike = (id) => {
    setPostStats((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id) => {
    alert(`Opening comments for post ID ${id}`);
  };

  const handleShare = (id) => {
    alert(`Post ID ${id} shared!`);
    setPostStats((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Investor & Business Posts
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {postStats.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Card sx={{ height: '100%' }}>
              <CardHeader
                avatar={<Avatar src={post.avatar} alt={post.author} />}
                title={post.author}
                subheader={post.date}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.description}
                </Typography>
                <Typography
                  variant="caption"
                  color="primary"
                  sx={{ mt: 2, display: 'block' }}
                >
                  Category: {post.category}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleLike(post.id)}
                  >
                    <ThumbUp />
                  </IconButton>
                  <Typography variant="body2">{post.likes} Likes</Typography>

                  <IconButton
                    color="secondary"
                    onClick={() => handleComment(post.id)}
                  >
                    <Comment />
                  </IconButton>
                  <Typography variant="body2">{post.comments} Comments</Typography>

                  <IconButton
                    color="success"
                    onClick={() => handleShare(post.id)}
                  >
                    <Share />
                  </IconButton>
                  <Typography variant="body2">{post.shares} Shares</Typography>
                </Stack>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InvestorBusinessPosts;
