import { IComboBoxOption } from "office-ui-fabric-react";

export interface IPropertyPaneAsyncComboProps {
     
    /**
     * The control label
     */
    label: string;

    /**
     * The optional text value to display in the combo box (independant from options)
     */
    textDisplayValue?: string;

    /**
     * Description of the control
     */
    description?: string;

    /**
     * The default selected key (single value mode)
     */
    defaultSelectedKey?: string;

    /**
     * The default selected keys (multi value mode)
     */
    defaultSelectedKeys?: string [];

    /**
     * The list of options already fetched once
     */
    availableOptions: IComboBoxOption[];

    /**
     * Should allow multiple selection
     */
    allowMultiSelect?: boolean;

    /**
     * Should allow free text values
     */
    allowFreeform?: boolean;

    /**
     * If enabled, the options will be fetched using the loadOptions method when the user is typing
     */
    searchAsYouType?: boolean;

    /**
     * Should the combo box be disabled
     */
    disabled?: boolean;

    /**
     * A state key to be able to reset options if needed 
     */
    stateKey?: string;

    /**
     * The combo box placeholder
     */
    placeholder?: string;

    /**
     * The method used to load options dynamically when menu opens (ex: async using an async call)
     * If you don't need to load data dynamically, just use the 'availableOptions' property
     * @param inputText an input text to narrow the initial query
     */
    onLoadOptions?: (inputText?: string) => Promise<IComboBoxOption[]>;

    /**
     * Callback when the list of options is retrieved
     */
    onUpdateOptions?: (properties: IComboBoxOption[]) => void;

    /**
     * Callback when the property is updated
     */
    onPropertyChange: (propertyPath: string, newValue: IComboBoxOption | IComboBoxOption[]) => void;

    /**
     * The method is used to get the validation error message and determine whether the input value is valid or not.
     *
     */
    onGetErrorMessage?: (value: string) => string;
}