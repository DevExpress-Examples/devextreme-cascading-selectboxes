using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CascadingSelectBoxesSample.Models {
    public class State
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public static State[] States = new State[] {
            new State() {
                ID = 1,
                Name = "Alabama"
            },
            new State() {
                ID = 2,
                Name = "Alaska"
            },
            new State() {
                ID = 3,
                Name = "Arizona"
            },
            new State() {
                ID = 4,
                Name = "Arkansas"
            },
            new State() {
                ID = 5,
                Name = "California"
            }
        };
    }
}
