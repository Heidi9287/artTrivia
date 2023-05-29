type FlexboxStyles = {
  borderRadius:string;
  width: string;
  height: string;
  display: string;
  backgroundColor: string;
  justifyContent: string;
  alignItems: string;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flexBasis:string;
};

export const front: FlexboxStyles = {
  borderRadius:"20px",
  width:"300px",
  height: "400px",
  display: "flex",
  backgroundColor: "#f9dfb3",
  justifyContent: "",
  alignItems: "center",
  flexWrap: "wrap",
  flexBasis: "",

};
export const buttonStyle: FlexboxStyles={
  borderRadius:"30px",
  display: 'flex', flexBasis: '100%', justifyContent: 'space-evenly',
  width: "",
  height: "",
  backgroundColor: "",
  alignItems: "",
}
export const back: FlexboxStyles={
  borderRadius:"20px",
  width:"300px",
  height: "400px",
  backgroundColor: "beige",
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: "wrap",
  flexBasis: "",

}

export const allCardStyles = { front,back,buttonStyle};