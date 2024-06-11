import { styled } from '@mui/material/styles';

import MUISelect, { selectClasses } from '@mui/material/Select';

export const Select = styled(MUISelect)(({ theme }) => ({
    borderRadius: 4,
    [`.${selectClasses.icon}`]: {
        opacity: 0.3,
    },
    '&:hover': {
        [`.${selectClasses.icon}`]: {
            opacity: 1,
        },
    },
    transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.standard,
    }),
}));
