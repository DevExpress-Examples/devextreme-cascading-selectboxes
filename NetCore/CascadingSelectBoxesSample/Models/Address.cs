using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CascadingSelectBoxesSample.Models
{
    public class Address
    {
        public int? StateID { get; set; }
        public int? CityID { get; set; }

        public static readonly Address Empty = new Address();
    }
}
