export const filterMovies = async (url) => {
 try {
  const request = await fetch(url);
  if(request.ok) {
   const response = await request.json();
   return response;
  }
 } catch (error) {
  console.log(error)
 }
}