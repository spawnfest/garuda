defmodule Garuda.Monitor.DashboardData do
  alias Garuda.RoomManager.Records

  def getdata do
    %{
      "num_conns" => 2,
      "num_rooms" => 10,
      "rooms" => %{
        self() => %{
          "ref" => "#Reference<0.1045496899.1461452802.82853>",
          "room_name" => :sucks218,
          "time" => 1_599_850_607_973
        },
        "pid 112" => %{
          "ref" => "#Reference<test_ref.1461452802.82853>",
          "room_name" => :sucks332,
          "time" => 1_599_850_000_000
        }
      }
    }
  end

  def getRoomstate(room_pid) do
    result = :sys.get_state(Records.via_tuple(room_pid))
    result
  end
end
