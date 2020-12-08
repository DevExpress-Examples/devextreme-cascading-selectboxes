Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Threading.Tasks

Namespace CascadingSelectBoxesSample.Models
	Public Class Address
		Public Property StateID() As Integer?
		Public Property CityID() As Integer?

		Public Shared ReadOnly Empty As New Address()
	End Class
End Namespace
