#pragma strict

public var projectile : Rigidbody;
public var barrelEnd : Transform;

function Update () {

	if(Input.GetKeyDown("space")) 
	{
		var shot : Rigidbody;
		shot = Instantiate(projectile, barrelEnd.position, barrelEnd.rotation);
		shot.AddForce(barrelEnd.right * 200);
	}
	
}