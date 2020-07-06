export function fab(n){
  if(n==1 || n==2){
    return 1;
  }else{
    return fab(n-1)+fab(n-2);
  }
}
