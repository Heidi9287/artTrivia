type FlexboxStyles = {
  borderRadius:string;
  width: string;
  height: string;
  display: string;
  backgroundColor: string;
  justifyContent: string;
  alignItems: string;
  color:string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexBasis:string;
};

export const front: FlexboxStyles = {
  borderRadius:"40px",
  width:"100%",
  height: "400px",
  display: "flex",
  backgroundColor: "lightblue",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  color: 'navy',
  flexBasis: ""
};
export const buttonStyle: FlexboxStyles={
  borderRadius:"40px",
  display: 'flex', flexBasis: '100%', justifyContent: 'space-evenly',
  width: "",
  height: "",
  backgroundColor: "",
  alignItems: "",
  color: ""
}
export const back: FlexboxStyles={
  borderRadius:"40px",
  width: "400px",
  height: "400px",
  backgroundColor: "beige",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: "wrap",
  color: 'navy',
  flexBasis: ""
}

export const allCardStyles = { front,back,buttonStyle};