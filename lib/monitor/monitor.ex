defmodule Garuda.Monitor do

  defmacro __using__(_options) do
    quote do
      scope "/" do
        pipe_through :browser
        live "/test", Garuda.Monitor.OrwellDashboard
      end
    end
  end

end
