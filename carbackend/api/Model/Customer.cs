using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        [MaxLength(100)]
        public string FullName { get; set; } = null!;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        [MaxLength(15)]
        public string MobileNo { get; set; } = null!;

        [MaxLength(200)]
        public string Address { get; set; } = null!;

        public DateTime CreatedDate { get; set; } = DateTime.Now;

        // Feedback / Reviews Section
        public List<CustomerFeedback> Feedbacks { get; set; } = new List<CustomerFeedback>();
    }
}
