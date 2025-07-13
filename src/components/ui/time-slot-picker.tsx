import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface TimeSlotPickerProps {
  selectedTime?: string
  onTimeChange: (time: string) => void
  className?: string
  disabled?: boolean
}

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00"
]

export function TimeSlotPicker({
  selectedTime,
  onTimeChange,
  className,
  disabled = false
}: TimeSlotPickerProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {timeSlots.map((time) => {
          const isSelected = selectedTime === time
          return (
            <Button
              key={time}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onTimeChange(time)}
              disabled={disabled}
              className={cn(
                "text-xs",
                isSelected && "bg-blue-600 hover:bg-blue-700"
              )}
            >
              {time}
            </Button>
          )
        })}
      </div>
      {selectedTime && (
        <p className="text-sm text-gray-600">
          Selected time: <span className="font-medium">{selectedTime}</span>
        </p>
      )}
    </div>
  )
}