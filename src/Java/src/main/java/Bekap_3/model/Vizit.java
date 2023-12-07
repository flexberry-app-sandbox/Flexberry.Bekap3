package Bekap_3.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap_3.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Визит
 */
@Entity(name = "IISBekap_3Визит")
@Table(schema = "public", name = "Визит")
public class Vizit {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодDизита")
    private Integer кодdизита;

    @Column(name = "НачалоСеанса")
    private Integer началосеанса;

    @Column(name = "КонецСеанса")
    private Integer конецсеанса;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "vizit", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapisVizita> zapisvizitas;


    public Vizit() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодDизита() {
      return кодdизита;
    }

    public void setКодDизита(Integer кодdизита) {
      this.кодdизита = кодdизита;
    }

    public Integer getНачалоСеанса() {
      return началосеанса;
    }

    public void setНачалоСеанса(Integer началосеанса) {
      this.началосеанса = началосеанса;
    }

    public Integer getКонецСеанса() {
      return конецсеанса;
    }

    public void setКонецСеанса(Integer конецсеанса) {
      this.конецсеанса = конецсеанса;
    }


}