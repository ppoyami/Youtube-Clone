import media from './media';

const colors = {
  backgroundColor: '#181818',
  navColor: '#202020',
  textColor: '#f9f9f9',
  subTextColor: '#676767',
  primaryColor: '#cc0101',
};
const align = {
  flexHorizontal: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexVertical: {
    display: 'flex',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

const theme = { colors, align, media };

export default theme;
