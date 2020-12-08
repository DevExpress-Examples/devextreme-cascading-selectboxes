﻿Imports System
Imports System.Collections.Generic
Imports System.IO
Imports System.Linq
Imports System.Threading.Tasks
Imports Microsoft.AspNetCore
Imports Microsoft.AspNetCore.Hosting

Namespace CascadingSelectBoxesSample
	Public Class Program
		Public Shared Sub Main(ByVal args() As String)
			BuildWebHost(args).Run()
		End Sub

		Public Shared Function BuildWebHost(ByVal args() As String) As IWebHost
			Return WebHost.CreateDefaultBuilder(args).UseStartup(Of Startup)().Build()
		End Function
	End Class
End Namespace
