Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace CascadingSelectBoxesSample.Models
	Public Class City
		Public Property ID() As Integer
		Public Property StateID() As Integer
		Public Property Name() As String

		Public Shared Cities() As City = {
			New City() With {
				.ID = 1,
				.Name = "Tuscaloosa",
				.StateID = 1
			},
			New City() With {
				.ID = 2,
				.Name = "Hoover",
				.StateID = 1
			},
			New City() With {
				.ID = 3,
				.Name = "Dothan",
				.StateID = 1
			},
			New City() With {
				.ID = 4,
				.Name = "Decatur",
				.StateID = 1
			},
			New City() With {
				.ID = 5,
				.Name = "Anchorage",
				.StateID = 2
			},
			New City() With {
				.ID = 6,
				.Name = "Fairbanks",
				.StateID = 2
			},
			New City() With {
				.ID = 7,
				.Name = "Juneau",
				.StateID = 2
			},
			New City() With {
				.ID = 8,
				.Name = "Avondale",
				.StateID = 3
			},
			New City() With {
				.ID = 9,
				.Name = "Buckeye",
				.StateID = 3
			},
			New City() With {
				.ID = 10,
				.Name = "Carefree",
				.StateID = 3
			},
			New City() With {
				.ID = 11,
				.Name = "Springdale",
				.StateID = 4
			},
			New City() With {
				.ID = 12,
				.Name = "Rogers",
				.StateID = 4
			},
			New City() With {
				.ID = 13,
				.Name = "Sherwood",
				.StateID = 4
			},
			New City() With {
				.ID = 14,
				.Name = "Jacksonville",
				.StateID = 4
			},
			New City() With {
				.ID = 15,
				.Name = "Cabot",
				.StateID = 4
			},
			New City() With {
				.ID = 16,
				.Name = "Adelanto",
				.StateID = 5
			},
			New City() With {
				.ID = 17,
				.Name = "Glendale",
				.StateID = 5
			},
			New City() With {
				.ID = 18,
				.Name = "Moorpark",
				.StateID = 5
			},
			New City() With {
				.ID = 19,
				.Name = "Needles",
				.StateID = 5
			},
			New City() With {
				.ID = 20,
				.Name = "Ontario",
				.StateID = 5
			}
		}
	End Class
End Namespace
