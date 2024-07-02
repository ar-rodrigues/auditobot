import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body to get the name and password
    const { name, password } = await request.json();

    // Fetch data from the API
    const response = await fetch('/api/data'); // Ensure this endpoint is correct

    if (!response.ok) {
      console.error('Error fetching data from API:', response.statusText);
      return NextResponse.json({ error: 'Error fetching data from API' }, { status: 500 });
    }

    const data = await response.json();

    // Access users data
    const usersData = data.users;

    // Find the specific user
    const user = usersData.find(user => user.name === name && user.password === password);

    if (user) {
      return NextResponse.json({ user: user.name, message: 'Login successful' });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Server error:' }, { status: 500 });
  }
}
