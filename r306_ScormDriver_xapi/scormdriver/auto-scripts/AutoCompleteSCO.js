function SetSCOComplete()
{
 	var SD = window.parent;

    //This is the last page so set it complete
    SD.SetReachedEnd();
	SD.CommitData();
}

//Automatically set the SCO complete.
SetSCOComplete();
