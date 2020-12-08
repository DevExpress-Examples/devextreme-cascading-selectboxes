Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Text
Imports System.Threading.Tasks

Namespace CascadingSelectBoxesSample.Models
	Public Class State
		Public Property ID() As Integer
		Public Property Name() As String

		Public Shared States() As State = {
			New State() With {
				.ID = 1,
				.Name = "Alabama"
			},
			New State() With {
				.ID = 2,
				.Name = "Alaska"
			},
			New State() With {
				.ID = 3,
				.Name = "Arizona"
			},
			New State() With {
				.ID = 4,
				.Name = "Arkansas"
			},
			New State() With {
				.ID = 5,
				.Name = "California"
			}
		}
	End Class
End Namespace
