import {StyleSheet} from "react-native";
export const styles=StyleSheet.create({
 screen:{flex:1,padding:20,paddingTop:60,backgroundColor:"#fff"},
 logo:{fontSize:42,fontWeight:"800",marginBottom:8},
 subtitle:{fontSize:18,marginBottom:30},
 header:{fontSize:30,fontWeight:"800",marginBottom:20},
 input:{borderWidth:1,borderColor:"#ddd",borderRadius:12,padding:14,marginBottom:12,backgroundColor:"#fafafa"},
 card:{borderRadius:24,padding:16,backgroundColor:"#f7f7f7",flex:1},
 photo:{width:"100%",height:430,borderRadius:20,marginBottom:12},
 photoPlaceholder:{height:430,borderRadius:20,marginBottom:12,backgroundColor:"#ddd",alignItems:"center",justifyContent:"center"},
 name:{fontSize:25,fontWeight:"800",marginBottom:6},
 tags:{marginTop:10,fontWeight:"600"},
 row:{flexDirection:"row",gap:12,alignItems:"center",marginTop:15},
 pass:{backgroundColor:"#555",padding:14,borderRadius:30,flex:1,alignItems:"center"},
 like:{backgroundColor:"#e91e63",padding:14,borderRadius:30,alignItems:"center"},
 buttonText:{color:"#fff",fontWeight:"800"},
 nav:{flexDirection:"row",justifyContent:"space-around",paddingVertical:20},
 listItem:{padding:18,borderBottomWidth:1,borderBottomColor:"#eee"},
 bubble:{alignSelf:"flex-start",backgroundColor:"#eee",padding:12,borderRadius:16,marginBottom:8,maxWidth:"80%"},
 bubbleMe:{alignSelf:"flex-end",backgroundColor:"#ffd1df",padding:12,borderRadius:16,marginBottom:8,maxWidth:"80%"}
});