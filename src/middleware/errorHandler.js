
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message:'server side error',
    error: err.message,
    status: 500
  })
}
export default errorHandler;