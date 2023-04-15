type FlexboxStyles = {
  width: string;
  height: string;
  display: string;
  backgroundColor: string;
  justifyContent: string;
  alignItems: string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

const front: FlexboxStyles = {
  width: "400px",
  height: "400px",
  display: "flex",
  backgroundColor: "lightblue",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};
const buttonStyle={display:'flex',flexBasis:'100%',justifyContent:'space-evenly'}
const back: FlexboxStyles={  width:"400px",
height:"400px",
backgroundColor: "beige",
display:"flex",
  justifyContent:'center',
  alignItems:'center',
  flexWrap: "wrap",
}
  const allCardStyles = { front,back,buttonStyle};
  export default allCardStyles;