import { Box, Typography, useTheme, alpha, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default function NotFound() {
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
          icon={['fas', 'triangle-exclamation']}
          style={{ fontSize: '1.75rem', color: p.error.main }}
        />
      </Box>

      {/* 404 */}
      <Typography sx={{
        fontSize:      { xs: '4rem', sm: '5rem' },
        fontWeight:    800,
        color:         p.text.primary,
        letterSpacing: '-3px',
        lineHeight:    1,
      }}>
        404
      </Typography>

      {/* Title */}
      <Typography sx={{
        fontSize:   { xs: 18, sm: 20 },
        fontWeight: 600,
        color:      p.text.primary,
        mt:         1,
      }}>
        Page not found
      </Typography>

      {/* Description */}
      <Typography sx={{
        fontSize:   { xs: 13, sm: 14 },
        color:      p.text.secondary,
        mt:         1,
        maxWidth:   380,
        lineHeight: 1.7,
      }}>
        The page you're looking for doesn't exist or you don't have permission to access it.
      </Typography>

      {/* Action */}
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          // icon={<FontAwesomeIcon icon={['fas', 'arrow-left']} style={{ fontSize: '0.8rem' }} />}
          onClick={() => navigate('/')}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}