using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    public class EfTest
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EfTestId { get; set; }

        public DateTime StartDate { get; set; }
    }
}
