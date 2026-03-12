using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.DBContext
{
    public class CarContext:DbContext
    {
        public CarContext(DbContextOptions<CarContext> options):base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<CarDetails> CarDetails { get; set; }
        public DbSet<Customer> Customers { get; set; }  
        public DbSet<CustomerFeedback> CustomerFeedbacks { get; set; }  
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}
