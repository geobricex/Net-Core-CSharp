using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Data
{
    public class Conexion
    {
        //Cadena de conexión hacia SQL server
        private static string bdhosthost = "ZOMBYTE\\BRICEXSERVER";
        //private static string Servidor = "ZOMBYTE"+@"\"+"BRICEXSERVER";
        private static string bdname = "DBPRUEBAS";
        private static string bduser = "sa";
        private static string bdpass = "Pa$$w0rd";  

        public static string rutaConexion = "Data Source="+ bdhosthost + ";Initial Catalog="+bdname+";User ID="+bduser+"; Password="+bdpass+"";
        //public static string rutaConexion = "Data Source="+Servidor+";Initial Catalog="+bdname+";Integrated Security=True";
    }
}