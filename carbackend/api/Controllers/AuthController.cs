using api.DBContext;
using api.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly CarContext _context;
        public AuthController(CarContext context)
        {
            _context = context;
        }
        [HttpPost("CreateNewUser")]
        public IActionResult CreateUser(User obj)
        {
            var useralreadyexist = _context.Users.SingleOrDefault(x => x.Email == obj.Email);

            if (useralreadyexist == null)
            {

                _context.Users.Add(obj);
                _context.SaveChanges();
                return Created("User Registered Success", obj);
            }
            else
            {
                return StatusCode(500, "Email Already Existed!");
            }
        }
        [HttpPost("Login")]
        public IActionResult Login(LoginRequest obj)
        {
            var user = _context.Users.SingleOrDefault(x => x.Email == obj.Email && x.Password == obj.Password);
            if (user == null)
            {
                return StatusCode(401, "wrong Crendential");
            }
            else
            {
                return StatusCode(200, user);
            }
        }
        [HttpGet("GetAllUsers")]
        public IActionResult AllUser()

        {
            var list = _context.Users.ToList();
            return Ok(list);
        }
        [HttpPost("AddCar")]
        public async Task<IActionResult> AddCar(CarDetails obj)
        {
            if (obj == null)
            {
                return BadRequest("Car details are required.");
            }



            _context.CarDetails.Add(obj);
            _context.SaveChanges();

            return Ok(new { message = "Car added successfully", car = obj });


        }
        [HttpGet("GetCarById/{carId}")]
        public IActionResult GetCarById(int carId)
        {
            var car = _context.CarDetails.FirstOrDefault(x => x.CarId == carId);
            if (car == null)
            {
                return NotFound(new { message = "Enter a valid id" });
            }
            return Ok(car);
        }

        [HttpGet("GetAllcars")]
        public IActionResult AllCars()
        {
            var carlist = _context.CarDetails.ToList();
            return Ok(carlist);
        }
        [HttpDelete("DeleteCar/{carId}")]
        public IActionResult DeletecarbyId(int carId)
        {
            var car = _context.CarDetails.FirstOrDefault(x => x.CarId == carId);
            if (car == null)
            {
                return NotFound(new { message = "Not car Found" });
            }
            _context.CarDetails.Remove(car);
            _context.SaveChanges();
            return Ok(new { message = "car deleted successfully" });
        }
        [HttpPut("UpdateCar/{carId}")]
        public IActionResult UpdateCar(int carId, CarDetails car)
        {
            if (car == null || carId != car.CarId)
            {
                return BadRequest("Invalid car data or ID miusmatch");
            }
            var exscar = _context.CarDetails.FirstOrDefault(x => x.CarId == carId);
            if (exscar == null)
            {
                return NotFound($"car with Id{carId}not found");
            }
            exscar.CarName = car.CarName;
            exscar.CarType = car.CarType;
            exscar.Brand = car.Brand;
            exscar.PricePerDay = car.PricePerDay;
            exscar.FuelType = car.FuelType;
            exscar.SeatingCapacity = car.SeatingCapacity;
            exscar.ImageUrl = car.ImageUrl;
            exscar.CreatedAt = car.CreatedAt;

            _context.SaveChanges();
            return Ok(new { message = "Car updated successfully", car = exscar });
        }
        [HttpPost("AddCustomer")]
        public IActionResult AddCust([FromBody] Customer obj)
        {
            if (obj == null)
                return BadRequest("Invalid customer data");

            bool isExist = _context.Customers.Any(x => x.Email == obj.Email || x.MobileNo == obj.MobileNo);
            if (isExist)
                return Conflict("Customer already exists with same Email or Mobile No");

           
            obj.CreatedDate = DateTime.Now;
            obj.Feedbacks = new List<CustomerFeedback>();
            _context.Customers.Add(obj);
            _context.SaveChanges();
            return Created("Customer created", obj);
        }
        [HttpGet("GetAllCustomer")]
        public IActionResult GetAllCustomer()
        {
            var customers = _context.Customers.ToList();
            return Ok(customers);
        }



    }
}
