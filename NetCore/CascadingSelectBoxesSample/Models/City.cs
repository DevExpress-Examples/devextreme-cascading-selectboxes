using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CascadingSelectBoxesSample.Models {
    public class City
    {
        public int ID { get; set; }
        public int StateID { get; set; }
        public string Name { get; set; }

        public static City[] Cities = new City[] {
            new City() {
                ID = 1,
                Name = "Tuscaloosa",
                StateID = 1
            }, new City() {
                ID = 2,
                Name = "Hoover",
                StateID = 1
            }, new City() {
                ID = 3,
                Name = "Dothan",
                StateID = 1
            }, new City() {
                ID = 4,
                Name = "Decatur",
                StateID = 1
            }, new City() {
                ID = 5,
                Name = "Anchorage",
                StateID = 2
            }, new City() {
                ID = 6,
                Name = "Fairbanks",
                StateID = 2
            }, new City() {
                ID = 7,
                Name = "Juneau",
                StateID = 2
            }, new City() {
                ID = 8,
                Name = "Avondale",
                StateID = 3
            }, new City() {
                ID = 9,
                Name = "Buckeye",
                StateID = 3
            }, new City() {
                ID = 10,
                Name = "Carefree",
                StateID = 3
            }, new City() {
                ID = 11,
                Name = "Springdale",
                StateID = 4
            }, new City() {
                ID = 12,
                Name = "Rogers",
                StateID = 4
            }, new City() {
                ID = 13,
                Name = "Sherwood",
                StateID = 4
            }, new City() {
                ID = 14,
                Name = "Jacksonville",
                StateID = 4
            }, new City() {
                ID = 15,
                Name = "Cabot",
                StateID = 4
            }, new City() {
                ID = 16,
                Name = "Adelanto",
                StateID = 5
            }, new City() {
                ID = 17,
                Name = "Glendale",
                StateID = 5
            }, new City() {
                ID = 18,
                Name = "Moorpark",
                StateID = 5
            }, new City() {
                ID = 19,
                Name = "Needles",
                StateID = 5
            }, new City() {
                ID = 20,
                Name = "Ontario",
                StateID = 5
            }
        };
    }
}
