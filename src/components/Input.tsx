interface Props {
  placeholder: string;
  value?: string;
  setValue: (value: string) => void;
}

export const Input: React.FC<Props> = ({ placeholder, value, setValue }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      max='100'
      value={value}
      onChange={(e) => { setValue(e.target.value) }}
    />
  )
}
