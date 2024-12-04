import React, { useState } from "react";
import { Controller } from "react-hook-form";
import {
  ExclamationCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  DocumentIcon,
  CalendarIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const Input = ({
  type = "text",
  label,
  placeholder,
  className = "",
  control,
  name,
  rules = {},
  disabled = false,
  required = false,
  icon = null,
  variant = "primary",
  dark = false,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const IconMap = {
    user: UserIcon,
    mail: EnvelopeIcon,
    phone: PhoneIcon,
    calendar: CalendarIcon,
    document: DocumentIcon,
  };

  const renderIcon = () => {
    if (!icon) return null;
    const IconComponent = IconMap[icon];
    return (
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <IconComponent
          className={`h-5 w-5 ${
            variant === "primary" ? "text-primary-500" : "text-secondary-500"
          }`}
        />
      </div>
    );
  };

  const renderPasswordToggle = () => {
    if (type !== "password") return null;
    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5 text-gray-400" />
        ) : (
          <EyeIcon className="h-5 w-5 text-gray-400" />
        )}
      </button>
    );
  };

  const inputType = type === "password" && showPassword ? "text" : type;
  const labelColorClass = dark ? "text-text-dark" : "text-text-light";

  return (
    <div className={`w-full ${className}`}>
      {label && type !== "checkbox" && type !== "radio" && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium ${labelColorClass} mb-2 text-left`}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? "This field is required" : false,
          ...rules,
        }}
        defaultValue={type === "checkbox" ? false : ""}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            {renderIcon()}

            {type === "checkbox" || type === "radio" ? (
              <div className="flex items-center">
                <input
                  {...field}
                  type={type}
                  disabled={disabled}
                  id={name}
                  className={`
                    mr-2 h-5 w-5 
                    ${
                      variant === "primary"
                        ? "text-primary-600 focus:ring-primary-500"
                        : "text-secondary-600 focus:ring-secondary-500"
                    }
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                />
                {label && (
                  <label
                    htmlFor={name}
                    className={`text-sm ${labelColorClass} ${
                      disabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                  </label>
                )}
              </div>
            ) : (
              <input
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  field.onChange(e);
                }}
                type={inputType}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
                ref={field.ref}
                className={`
                  w-full h-14 px-3 border rounded-md 
                  ${icon ? "pl-10 " : "pl-3"}
                  ${
                    variant === "primary"
                      ? "border-primary-300 focus:ring-primary-500 focus:border-primary-500"
                      : "border-secondary-300 focus:ring-secondary-500 focus:border-secondary-500"
                  }
                  ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              />
            )}

            {renderPasswordToggle()}

            {error && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              </div>
            )}
          </div>
        )}
      />

      {/* Error message */}
      <Controller
        name={name}
        control={control}
        render={({ fieldState: { error } }) =>
          error && (
            <p className="mt-1 text-sm text-red-600">
              {error.message || "This field is invalid"}
            </p>
          )
        }
      />
    </div>
  );
};

export default Input;
