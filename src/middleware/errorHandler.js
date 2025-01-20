
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message:'somthing went wrong',
    error: err.message,
    status: 500
  })
}
export default errorHandler;