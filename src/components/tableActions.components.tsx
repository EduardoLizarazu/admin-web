import { Link, Tooltip } from "@nextui-org/react";
import { CheckIcon, DeleteIcon, EditIcon } from "./index.component";
import { ReactNode } from "react";

interface EditAction {
    status : boolean;
    function : (data : any) => void;
    link : string;
}

interface CheckAction {
    status : boolean;
    function : (data : any) => void;
    link : string;
}
interface RemoveAction {
    status : boolean;
    function : (data : any) => void;
}

interface TableActionsProps {
    edit? : EditAction;
    check? : CheckAction;
    remove? : RemoveAction;
    children?: ReactNode;
}

export default function TableActionsField(props: TableActionsProps) {
    const { edit, check, remove } = props;

    return (
        <div className="relative flex items-center gap-2">
                {check?.status && (<Tooltip color="success" content="activar">
                  <span className="text-lg text-success cursor-pointer active:opacity-50">
                    <CheckIcon onClick={() => check.function} />
                  </span>
                </Tooltip>)}
                {remove?.status && (<Tooltip color="danger" content="desactivar">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon onClick={() => remove.function} />
                  </span>
                </Tooltip>)}
                {edit?.status && (<Tooltip content="Editar">
                  <Link href={edit.link}>
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon />
                    </span>
                  </Link>
                </Tooltip>)}
                {remove?.status && (<Tooltip content="Eliminar">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <button
                      onClick={() => remove.function}
                    >
                      <DeleteIcon />
                    </button>
                  </span>
                </Tooltip>)}
                {/* Aqui puede venir un elemento de los props */}
                {props.children}
              </div>
    );
}