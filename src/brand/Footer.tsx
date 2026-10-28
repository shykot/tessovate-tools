import { Box, Link, Typography } from '@mui/material';
import { BRAND } from './config';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        px: 2,
        borderTop: 1,
        borderColor: 'divider',
        textAlign: 'center',
        backgroundColor: 'background.default'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()}{' '}
        <Link href={BRAND.url} target="_blank" rel="noopener" color="inherit">
          {BRAND.owner}
        </Link>
        . All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Built on{' '}
        <Link
          href={BRAND.upstream.url}
          target="_blank"
          rel="noopener"
          color="inherit"
          sx={{ fontWeight: 600 }}
        >
          {BRAND.upstream.name}
        </Link>{' '}
        — thank you to the OmniTools team and contributors for this wonderful
        open-source project (MIT License).
      </Typography>
    </Box>
  );
}
