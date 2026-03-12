using System.ComponentModel.DataAnnotations;

namespace api.Model
{
    public class CustomerFeedback
    {
        [Key]
        public int FeedbackId { get; set; }

        [Required]
        [MaxLength(500)]
        public string Comment { get; set; } = null!;

        [Range(1, 5)]
        public int Rating { get; set; }

        public DateTime FeedbackDate { get; set; } = DateTime.Now;
    }
}