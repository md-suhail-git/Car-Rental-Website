using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class CarDetails
    {
        [Key]
        public int CarId { get; set; }
        public string CarName { get; set; } = null!;
        public string CarType { get; set; } = null!;
        public string Brand { get; set; } = null!;
        public decimal PricePerDay { get; set; }
        public string FuelType { get; set; } = null!;
        public int SeatingCapacity { get; set; }
        public string ImageUrl { get; set; } = null!;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
