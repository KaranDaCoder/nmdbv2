import mongoose, {Schema} from "mongoose";




const Ratings = new Schema({
 Source: {
  type: String
 },
 Value: {
  type: String
 }
})


const MovieSchema = new Schema({
 title:{
  type: String,
  required: true
 },
 rated:{
  type: String,
 },
 cast:{
  type: [String],
 },
 director:{
  type: [String],
 },
 writer:{
  type: [String],
 },
 genres:{
  type: [String],
 },
 language:{
  type: [String],
 },
 runtime:{
  type: String,
 },
 poster_path:{
  type: String,
 },
 releasedYear:{
  type: String,
 },
 released:{
  type: String
 },
 country:{
  type: [String],
 },
 awards:{
  type: String
 },
 ratings:[
  {
   type: Object,
   ref : Ratings
  }
 ],
 metascore:{
  type: String
 },
 imdbId:{
  type: String,
  required: true,
  unique: [true, 'Movie already exists in DB...']
 },
 imdbRating:{
  type: String,
 },
 boxoffice:{
  type: String,
 },
 production:{
  type: String,
 },
 website:{
  type: String,
 },
 global_category:{
  type: String,
  required: [true , 'Movie Category Is needed..'],
 },
 dvdReleased:{
  type: String,
 },
 watchAs:{
  type: String,
  required: true,
  default: 'movie'
 },

}, {timestamps: true})

const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
export default Movie;