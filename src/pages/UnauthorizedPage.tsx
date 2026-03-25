import { Box, Typography, useTheme, alpha, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

library.add(fas);

const UnauthorizedPage = () => {
  const theme    = useTheme();
  const p        = theme.palette;
  const navigate = useNavigate();

  return (
    <Box sx={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      minHeight:      '98vh',
      width:          '100%',
      textAlign:      'center',
      px:             { xs: 2, sm: 4 },
      py:             { xs: 6, sm: 8 },
      bgcolor:        p.background.default,
    }}>

      {/* Icon */}
      <Box sx={{
        width:          72,
        height:         72,
        borderRadius:   `${theme.shape.borderRadius * 2}px`,
        bgcolor:        alpha(p.error.main, 0.1),
        border:         `1px solid ${alpha(p.error.main, 0.25)}`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        mb:             3,
      }}>
        <FontAwesomeIcon
          icon={['fas', 'lock']}
          style={{ fontSize: '1.75rem', color: p.error.main }}
        />
      </Box>

      {/* Heading */}
      <Typography sx={{
        fontSize:   { xs: 22, sm: 26 },
        fontWeight: 800,
        color:      p.text.primary,
        lineHeight: 1.2,
      }}>
        Access Denied
      </Typography>

      {/* Subtext */}
      <Typography sx={{
        fontSize:   { xs: 13, sm: 14 },
        color:      p.text.secondary,
        mt:         1,
        maxWidth:   400,
        lineHeight: 1.7,
      }}>
        You don't have permission to view this page.
        Contact your administrator if you think this is a mistake.
      </Typography>

      {/* Actions */}
      <Box sx={{
        display:        'flex',
        gap:            '5px',
        mt:             3,
        flexWrap:       'wrap',
        justifyContent: 'center',
      }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Go Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Dashboard
        </Button>
      </Box>

    </Box>
  );
};

export default UnauthorizedPage;