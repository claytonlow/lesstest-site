import { NextRequest, NextResponse } from "next/server";

const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "developer" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "qa" },
  { id: 4, name: "Dave Brown", email: "dave@example.com", role: "designer" },
];

export async function GET(request: NextRequest) {
  const action = request.nextUrl.searchParams.get("action");

  if (action === "users") {
    return NextResponse.json({
      success: true,
      data: mockUsers,
      total: mockUsers.length,
      timestamp: new Date().toISOString(),
    });
  }

  if (action === "slow") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return NextResponse.json({
      success: true,
      message: "This response was delayed by 2 seconds",
      timestamp: new Date().toISOString(),
    });
  }

  if (action === "error") {
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Something went wrong on the server",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Playground API is running",
    availableActions: ["users", "slow", "error"],
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));

  const newUser = {
    id: Math.floor(Math.random() * 10000),
    ...body,
    createdAt: new Date().toISOString(),
  };

  return NextResponse.json(
    {
      success: true,
      message: "User created successfully",
      data: newUser,
    },
    { status: 201 },
  );
}
