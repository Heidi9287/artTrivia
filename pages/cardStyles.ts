type FlexboxStyles = {
  width: string;
  height: string;
  display: string;
  backgroundColor: string;
  justifyContent: string;
  alignItems: string;
  color:string;
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
  color:'navy'
};
const buttonStyle={display:'flex',flexBasis:'100%',justifyContent:'space-evenly'}
const back: FlexboxStyles={  width:"400px",
height:"400px",
backgroundColor: "beige",
display:"flex",
  justifyContent:'center',
  alignItems:'center',
  flexWrap: "wrap",
  color:'navy',
}
  const allCardStyles = { front,back,buttonStyle};
  export default allCardStyles;